import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import qr_image from './assets/image-qr-code.png';

function App() {
  return (
    <div className="card" style={{ width: '20rem', padding: '1rem'}}>
      <img className="card-img" src={qr_image} alt="qr code component" />
      <div className="card-body">
        <h5 className="card-title">Improve your front-end skills by building projects</h5>
        <p className="card-text">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </div>
  );
}

export default App;
