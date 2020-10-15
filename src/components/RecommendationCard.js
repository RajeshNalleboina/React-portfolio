import React, {useState} from 'react'
import Modal,{closeButton} from 'react-bootstrap/Modal';

function RecommendationCard(props) {
    let {message,fback,name}=props.cardsData;
    var data=""
    if (message.length>35){
        data=message.slice(0,35)+"...";
    }
    else{
        data=message;
    }
    //hooks
    const [show, setShow] = useState(false);
    const Show = () => setShow(true);
    const close=()=> setShow(false);
  

    return (
        <>
        <div className="card shadow h-100" onClick={Show}>
          <div className="card-body">
            <h4 className="card-text">
                {data}
            </h4>
             <p className="card-text text-secondary mb-0">{fback}</p>
             <p className="card-text text-secondary">{name}</p>
          </div>
        </div>
        <Modal show={show} onHide={close} animation={false}>
        <Modal.Header closeButton />
          
        <Modal.Body className="text-center">
            <h5>{message}</h5>
            <p>{fback}</p>
            <p>{name}</p>

        </Modal.Body>

      </Modal>
        </>
    )
}

export default RecommendationCard
