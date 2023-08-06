import { Openable } from '../components/Openable';
import './FaqCard.scss';

export function FaqCard() {
      
    return <div id="faq" className='card stripe'>
        <div className='fancy-vector-1'></div>
        <div className='fancy-vector-2'></div>
        <h2 className='text-align-center'>FAQ</h2>
        <div className='lead-text mb-5'>Najczęstsze pytania i odpowiedzi</div>
        <div className='row'>
            <div className='offset-1 col-4'>
                <div className='d-flex flex-column'>
                    <Openable label="test">a</Openable>
                    <Openable label="test">b</Openable>
                    <Openable label="test">c</Openable>
                </div>
            </div>
            <div className='offset-2 col-4'>
                <div className='d-flex flex-column'>
                    <Openable label="test">d</Openable>
                    <Openable label="test">e</Openable>
                    <Openable label="test">f</Openable>
                </div>
            </div>
        </div>
    </div>;
}