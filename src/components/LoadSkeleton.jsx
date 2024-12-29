import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

export default function LoadSkeleton() {
  return (
    <Box
      sx={{
        // bgcolor: '#121212',
        m: 1,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Skeleton
        sx={{ bgcolor: 'grey.900' }}
        variant="rectangular"
        width={260}
        height={280}
      />
    </Box>
  );
}
