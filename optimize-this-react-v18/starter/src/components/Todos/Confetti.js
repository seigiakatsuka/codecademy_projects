import Confetti from 'react-confetti';

const ReactConfetti = ({ size, showConfetti, setShowConfetti }) => {

  return (
    <>
      {showConfetti ? (
        <Confetti
          width={size.width}
          height={size.height}
          numberOfPieces={200}
          recycle={false}
          onConfettiComplete={() => {
            setShowConfetti(false);
          }}
        />
      ) : null}
    </>
  );
};

export default ReactConfetti;
