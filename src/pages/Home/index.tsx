// import Guide from '@/components/Guide';
import { jsPDF } from "jspdf";

const Home = () => {
  return <div>

      <div onClick={() => {
        const doc = new jsPDF();

        doc.text("Hello world!", 10, 10);
        doc.save("a4.pdf");
      }}>Click</div>
    </div>;
};

export default Home;
