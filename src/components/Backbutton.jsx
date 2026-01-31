import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Backbutton() {
  const navigate = useNavigate();

  return (
    <Button
      type="back"
      onClick={(event) => {
        event.preventDefault();
        navigate(-1); // navigate to before history
      }}
    >
      &larr; Back
    </Button>
  );
}

export default Backbutton;
