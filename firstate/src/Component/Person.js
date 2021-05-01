import React, { Component } from 'react'
import '../Css/Person.css'

 class Person extends Component {
    
      state = {
            fullName:"",
            Bio:"",
            imgSrc:"",
            profession:"",
            shows:false,
            count :0
        }
       
        handleClick=()=> {
                this.setState(prevstate => ({
                shows: !(prevstate.shows),
                
            }));
          }
          ChangeStateFinal=()=> {
            this.setState({
                fullName:"Adel Imam",
                Bio:"Théatre est ma vie",
                imgSrc:"https://navireweb.com/wp-content/uploads/2021/01/exclusif-a-madam-net-le-fait-quadel-imam-a-ete-infecte-par-le-virus-corona-780x470.jpg",
                profession:"Actor",
                shows: !(this.state.shows),
            });
        }

        componentDidMount(){
            this.interval= setInterval(() => {
                this.setState(prevstate =>({
                count : prevstate.count +1
                }))
            }, 1000)
            
            }
        
        componentWillUnmount(){
            clearInterval(this.interval)
        }  
          
         render() {
            console.log(this.state.shows)

            if(this.state.shows===true){
                return (
                    <div className="raw">
                        <h1>{this.state.fullName} Profile</h1>
                        <p><span>Name:</span>{this.state.fullName}</p>
                        <p><span>Bio:</span>{this.state.Bio}</p>
                        <img src={this.state.imgSrc} alt={this.state.fullName} />
                        <p><span>Profession:</span>{this.state.profession}</p>
                        <input type="text"class="form-control" value={this.state.count} 
                        style={{maxWidth:'70px',margin:"10px auto"}}
                         />
                        <button className="btn btn-danger" onClick={this.handleClick && this.ChangeStateFinal}
                        style={{cursor: 'pointer'}}> Change
                        </button>
                       
                
            
                    </div>
                )
        }
        else {
            return (
            <div>
                <p>no-profile-existen</p>
                <button className="btn btn-danger"
                 onClick={(this.handleClick)}
                 style={{cursor: 'pointer'}}>
                     Click Change
                </button>
            </div>
            )
}

                   
         }
        }

export default Person
