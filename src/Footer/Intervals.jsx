import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { INTERVALS } from './Constants';
import Stack from 'react-bootstrap/Stack';


function Intervals({activeHour, setActiveHour}) {
    return (
        <>
            <Row >
                <Col>
                    <Stack className="justify-content-center" direction="horizontal" gap={3}>
                        {INTERVALS.map(({ id, name }) => (
                            <Button key={id} variant="outline-warning" active={(activeHour || 1) === id}
                            onClick={() => setActiveHour(id)}
                            >
                                {name}
                            </Button>
                        ))}
                    </Stack>
                </Col>
            </Row>
        </>
    )
}

export default Intervals;