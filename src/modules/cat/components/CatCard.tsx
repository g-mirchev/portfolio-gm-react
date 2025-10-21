import { useCallback, useEffect, useState } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
  Skeleton,
  Alert,
} from '@mui/material';
import type { CatImage } from '..';

function isCatImage(value: unknown): value is CatImage {
  if (typeof value !== 'object' || value === null) return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v.id === 'string' &&
    typeof v.url === 'string' &&
    typeof v.width === 'number' &&
    typeof v.height === 'number'
  );
}

export default function CatCard() {
  const [image, setImage] = useState<CatImage | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCat = useCallback(async (signal?: AbortSignal) => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch(
        'https://api.thecatapi.com/v1/images/search?size=small&mime_types=jpg,png&order=RANDOM&limit=1',
        { 
          signal, 
          headers: { 
            'x-api-key': import.meta.env.VITE_APP_CAT_API_KEY 
          } 
        }
      );
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const json: unknown = await res.json();

      if (!Array.isArray(json) || json.length === 0 || !isCatImage(json[0])) {
        throw new Error('Unexpected API response');
      }

      setImage(json[0]);
    } catch (e: unknown) {
      if (e instanceof DOMException && e.name === 'AbortError') return;
      const message = e instanceof Error ? e.message : 'Failed to load cat 😿';
      setError(message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const abortController = new AbortController();
    void fetchCat(abortController.signal);
    return () => abortController.abort();
  }, [fetchCat]);

  return (
    <Card 
      sx={{ 
        maxWidth: 520,
        mx: 'auto' 
      }}
    >
      {loading ? (
        <Skeleton variant="rectangular" height={320} />
      ) : image ? (
        <CardMedia
          component="img"
          image={image.url}
          sx={{ maxHeight: 420 }}
        />
      ) : (
        <Skeleton variant="rectangular" height={320} />
      )}
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography variant="h6">Random Cat</Typography>
        {error && (
          <Alert severity="error" sx={{ mt: 1 }}>
            {error}
          </Alert>
        )}
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }}>
        <Button 
          variant="contained" 
          onClick={() => void fetchCat()} 
          disabled={loading}
        >
            {loading ? 'Fetching…' : 'Another one'}
        </Button>
      </CardActions>
    </Card>
  );
}
