import { useParams } from "react-router-dom";

const QuoteDetail = () => {
    const { quoteId } = useParams()
    return (
      <section>
        <h2>Quote details</h2>
        <p>{quoteId}</p>
      </section>
    );
  };
  
  export default QuoteDetail;