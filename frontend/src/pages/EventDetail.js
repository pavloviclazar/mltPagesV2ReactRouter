import { useParams } from "react-router-dom";

function EvenetDetailPage() {
  const params = useParams();

  return (
    <>
      <h1>EvenetDetailPage</h1>
      <p>Event ID: {params.eventId}</p>
    </>
  );
}

export default EvenetDetailPage;
