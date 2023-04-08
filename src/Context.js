// yaha pe pura data rahega jo pass hoga component mai 
// with he help of  creatContext, Provider, Consumer
import React, { Component } from 'react'
// import { FaSlidersH } from 'react-icons/fa';
import items from "./data";


const RoomContext = React.createContext();// ismai jo value pass krenge vo Defalut valu hogi.



export default class RoomProvider extends Component {
    // All the Information of State in Object Of State pura objcet provide 
    // karna hai isiliye (value = State)
    state={
       rooms:[], // That Store All The imformation about Room
       sortedRooms :[], //Change While we Sorting The room
       featuredRooms : [], // featured room
       loading : true,
       type : 'all',
       capacity : 1,
       price : 0,
       minPrice : 0,
       maxPrice : 0,
       minSize : 0,
       maxSize :0,
       breakfast : false,
       pets : false

    };
    // componentDidMount is used for updating a value  in state
    componentDidMount(){  //jab paheli bar load hoga tab ye show krega 
      let rooms = this.formatDate(items) // This items argument that passing to our Local data , rooms hold the all the value of formatDate
        console.log(rooms , "All the 13 room"); // rooms mai pura data aaya hai 
        let featuredRooms = rooms.filter(room =>room.featured === true);
        console.log(featuredRooms, " This is a fratured room");
        
        const maxPrice = Math.max(...rooms.map(item =>  item.price )) // return the max price from rooms(data)
        const maxSize = Math.max(...rooms.map(item=>item.size))  // return the max size from rooms(data)
         
     
        this.setState({
            rooms,
            featuredRooms,
            sortedRooms : rooms, // sortedRooms will have Same information same like rooms
            loading : false,
            price : maxPrice,
            maxPrice, maxSize
        })
    }

    formatDate(items){  // this items is just paramer
        let tempItems = items.map(item =>{
            let id = item.sys.id;
            let images = item.fields.images.map(image =>image.fields.file.url);
            let room = {...item.fields ,images,id}; // With help of Spred Operator we acces the all the property of fields , overriod the imges
            return room;
        })
        return tempItems;
    }

    getRoom = slug =>{
      let tempRoom = [...this.state.rooms]; // Accessing a Specific Room room
      const room = tempRoom.find(room => room.slug === slug); // room which hold the value of slug is equal to slig which we pass , is store in room variable
      return room;
    }
    
    handalChange = event =>{
      const target = event.target;
      const value= target.type ==="checkbox" ? target.checked : target.value
      const name = event.target.name;
      this.setState({
        [name] : value
      } , this.filterRoom )
      
      // console.log( name , value)
    }

    filterRoom = ()=>{ // grab the value from the state
      let {
        rooms,
        type,
        capacity,
        price,
        minSize,
        maxSize,
        breakfast,
        pets
      } = this.state;

      let tempRooms = [...rooms];
      capacity = parseInt(capacity);
      price = parseInt(price);
      // filter by type
      if (type !== "all") {
        tempRooms = tempRooms.filter(room => room.type === type);
      }
      // filter by capacity
        if (capacity !== 1) {
          tempRooms = tempRooms.filter(room => room.capacity >= capacity);
        }

        // filter by price
    tempRooms = tempRooms.filter(room => room.price <= price);

    //filter by size
    tempRooms = tempRooms.filter(
      room => room.size >= minSize && room.size <= maxSize
    );

    //filter by breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter(room => room.breakfast === true);
    }
    //filter by pets
    if (pets) {
      tempRooms = tempRooms.filter(room => room.pets === true);
    }

    // change state
      this.setState({
        sortedRooms: tempRooms
      });
    }

  render() {
    return (
      // getRoom:this.getRoom with the help of This we acsses dataAll Over the app
      //Value ke andar pura Object pass Kiya hai
      <RoomContext.Provider value={{...this.state , getRoom:this.getRoom , handalChange:this.handalChange}}>
        {/* Way To Acces The children in class based Component  */}
        {this.props.children} 
      </RoomContext.Provider>
    );
  }
}

// create a Consumer to Consume the data From provoider
const RoomConsumer = RoomContext.Consumer;



export{RoomProvider, RoomContext,RoomConsumer }

export function withRoomConsumer(Component) { // Component are Wrapped into the withRoomConsumer HOF
  return function ConsumerWrapper(props) { // it will return a another function that why it call Highter order function
    return (
      <RoomConsumer>
        {value => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}


// when we create a HOF , we running a function (withRoomConsumer) in RoomContainer and we do need to pass those props in component(loading , sortedRooms, rooms)