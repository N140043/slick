import './index.css'

const PlanetItem = props => {
  const {
    planetDetails: {imageUrl, name, description},
  } = props
  return (
    <div className="each-planet">
      <img src={imageUrl} alt={`planet ${name}`} className="planet-image" />
      <h1 className="planet-name">{name}</h1>
      <p className="planet-description">{description}</p>
    </div>
  )
}

export default PlanetItem

// import {Component} from 'react'
// import './index.css'

// class PlanetItem extends Component {
//   render() {
//     const {planetsDetails} = this.props
//     // console.log(planetDetails)
//     const {name, imageUrl, description} = planetsDetails

//     return (
//       <div className="container">
//         <img src={imageUrl} alt={`planet ${name}`} className="img" />
//         <h1 className="head">{name}</h1>
//         <p className="p">{description}</p>
//       </div>
//     )
//   }
// }
// export default PlanetItem
