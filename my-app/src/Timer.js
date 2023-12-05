import React, { useState, useEffect } from 'react';
import axios from 'axios'

class Apps extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      count: 0
    }
  }

fetchData = async () => {
    const leeds = await axios.get('https://redevcrm.herroku.com/leeds')
    console.log(leeds.data);
}

  componentDidMount = () => {
    this.fetchData()
  }

  render () {
    return <div className='App'></div>
  }
}

export default Apps;