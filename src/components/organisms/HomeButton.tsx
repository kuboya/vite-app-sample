import { type SyntheticEvent, type FC } from 'react';
import { ArrowUpIcon } from '@chakra-ui/icons';
import { Box, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const HomeButton: FC<{ my?: number | string }> = ({ my = 0 }) => {
  const navigate = useNavigate();
  const handleClick = (event: SyntheticEvent) => {
    event.stopPropagation();
    navigate('/');
  };

  return (
    <Box my={my}>
      <Button color="grey" onClick={handleClick} leftIcon={<ArrowUpIcon />}>
        Home
      </Button>
    </Box>
  );
};

export default HomeButton;