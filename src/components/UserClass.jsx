import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Default",
        avatar_url: "https://via.placeholder.com/150",
      },
    };

    // console.log(this.props.name + " Child - constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + " Child - componentDidMount");

    const data = await fetch("https://api.github.com/users/kaushinder");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    // console.log("Component Did Update");
  }

  componentWillUnmount() {
    // console.log("Component Will Unmount");
  }

  render() {
    // console.log(this.props.name + " Child - render");

    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="flex max-w-sm flex-col items-center gap-4 rounded-2xl bg-white p-6 shadow-lg transition hover:shadow-xl">
        
        {/* Profile Image */}
        <img
          src={avatar_url}
          alt={name}
          className="h-32 w-32 rounded-full border-4 border-orange-400 object-cover shadow-md"
        />

        {/* Name */}
        <h2 className="text-xl font-bold text-gray-800">
          {name}
        </h2>

        {/* Location */}
        <p className="text-gray-600">
          📍 {location || "Not available"}
        </p>

        {/* Contact */}
        <p className="text-sm text-gray-500">
          Contact: @thakur_kaushinder
        </p>
      </div>
    );
  }
}

export default UserClass;
