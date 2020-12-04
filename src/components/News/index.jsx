import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteNewsAction, approveAction } from '../../actions/index'
import { Card, Button } from 'react-bootstrap'
import AddNews from './AddNews'
function News() {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)

  const news = useSelector(s => s.news)
  const role = useSelector(s => s.user?.role)

  const remove = (id) => dispatch(deleteNewsAction(id))
  const approve = (id) => dispatch(approveAction(id))
  

  return (
    <div>

        <h2 style={{margin: '30px', textAlign: 'center'}}>News</h2>
      {role &&
        <div className="d-flex justify-content-center m-3">
          <Button onClick={() => setShow(!show)}>Add News</Button>
        </div>
      }
      {show &&
        <AddNews />
      }
      

      <div className="cardWrapper">
        {news.approved?.map(n =>
          <Card key={n.id}>
          <Card.Body className="newsCard-body">
            <Card.Title>{n.title}</Card.Title>
            <Card.Text>{n.content}</Card.Text>
            {role === 'admin' && <Button onClick={() => remove(n.id)}>delete</Button>}
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">{n.date.toString()}</small>
          </Card.Footer>
          
        </Card>
        )}
        {role === 'admin' &&
          news.toApprove.map(n =>
            <Card key={n.id}>
          <Card.Body className="newsCard-body">
            <Card.Title>{n.title}</Card.Title>
            <Card.Text>{n.content}</Card.Text>
            <div className="d-flex">
            <Button className="mr-2 " onClick={() => remove(n.id)}>delete</Button>
            <Button onClick={() => approve(n.id)}>approve</Button>
            </div>
            
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">{n.date.toString()}</small>
          </Card.Footer>
          
        </Card>
          )}
      </div>
    </div>
  );
}


export default News;
