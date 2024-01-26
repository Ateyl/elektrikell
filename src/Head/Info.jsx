
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { PRICE_BUTTONS, BADGES } from './Constant';

function Info({ activePrice, setActivePrice }) {




    return (

        <>
            <Col>
                <div>
                Current price of electricity is
                <Badge bg={BADGES[0].name}>{BADGES[0].id}Success</Badge>
                </div>
            </Col>
            <Col> <ButtonGroup aria-label="">
                {PRICE_BUTTONS.map(({ name, id }) =>
                (<Button key={id} active={activePrice === id}
                    onClick={() => setActivePrice(id)} variant="secondary">{name}</Button>))
                }
            </ButtonGroup></Col>
            <Col className='text-end'>
            <h2 className='text-end'>
                xx.xx
            </h2>
            <div>cent / kilowatt-hour</div>
            </Col>
        </>
    )
}

export default Info;
//ALT SHIFT DOWN ARROW