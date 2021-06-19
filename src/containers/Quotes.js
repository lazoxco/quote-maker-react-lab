import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes'

class Quotes extends Component {

  render() {
    const quotes = this.props.quotes.map((quote, index) => {
      return <QuoteCard key={index} quote={quote} upvoteQuote={this.props.upvoteQuote} downvoteQuote={this.props.downvoteQuote} removeQuote={this.props.removeQuote} />
    })
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {/*
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}
               {quotes}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed
const mapStateToProps = state => ({
  quotes: state.quotes
})

const mapDispatchToProps = dispatch => ({
  removeQuote: quote => dispatch(removeQuote(quote)),
  upvoteQuote: quote => dispatch(upvoteQuote(quote)),
  downvoteQuote: quote => dispatch(downvoteQuote(quote))
})

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
