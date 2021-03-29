import React, {
    Component
} from 'react'
import axios from 'axios'

import { Button,Card,Col} from 'react-bootstrap';
export default class Quotes extends Component {
    constructor() {
        super()
   this.state = {
        quoteText: "",
        quoteAuthor: "",
    };
    // Binding!
    
    this.Iterate = this.Iterate.bind(this)
    this.handleNewQuote = this.handleNewQuote.bind(this)
    
    }
     Iterate() {
        axios("https://type.fit/api/quotes").then(({
            data
        }) => {
            const i = Math.floor(Math.random() * data.length)
            this.setState({
                quoteText: data[i].text,
                quoteAuthor: data[i].author
            })
        })
    }
    
        handleNewQuote() {
            this.Iterate();
        }
    
        render() {
           const { quoteText,quoteAuthor} = this.state

            return ( 
                <div>
                  <Card className="text-center  card ">
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title>{quoteAuthor}</Card.Title>
    <Card.Text>
      {quoteText}
    </Card.Text>
    <Button variant="primary" onClick={this.handleNewQuote}>Quote Generator</Button>
  </Card.Body>
  <Card.Footer className="text-muted">Now</Card.Footer>
</Card>
                
                </div>
            )
        }
    }