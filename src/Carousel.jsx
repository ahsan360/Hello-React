import { Component } from "react";
class Carousel extends Component {
  state = {
    active: 0,
  };
  static defultPropos = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };
  handleIndex = (e) => {
    this.setState({
      active: +e.target.dataset.index,
    });
  };
  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="pets " />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            <img
              onClick={this.handleIndex}
              data-index={index}
              key={photo}
              src={photo}
              className={index === active ? "active" : ""}
            ></img>
          ))}
        </div>
      </div>
    );
  }
}
export default Carousel;
