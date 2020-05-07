import React, { Component } from 'react';
import { withRouter } from "react-router";
<<<<<<< HEAD
import moment from "moment";
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie,
  } from 'recharts';
=======
import moment from 'moment';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

>>>>>>> 56021e8aad7c8d3bb18841e8e9f39edae40fc506
import './single.css'

class Single extends Component {

    goBack = () => {
        this.props.history.goBack();
    }

    render(){
        const {id} = this.props.match.params;
        const { employees } = this.props;

<<<<<<< HEAD
        let employee = { };
=======
        let employee = { logins: [] };
>>>>>>> 56021e8aad7c8d3bb18841e8e9f39edae40fc506
        for(let i=0;i<employees.length; i++){
            if(Number(id) === employees[i].id){
                employee = employees[i];
                break;
            }
        }
<<<<<<< HEAD

        let months = {};
        let days = {};
        employee.logins.forEach(login=>{
            const {date} = login;
            const month = moment(date).format('MMM');
            const day = moment(date).format('dddd');
            if(!months[month]){
                months[month] = 1
            } else {
                months[month]++
            }
            if(!days[day]){
                days[day] = 1
            } else {
                days[day]++
            }
        })
        const arr = Object.keys(months).map(month=>{
            const count = months[month];
            return {month,count}
        })

        const pieData = Object.keys(days).map(day=>{
            const count = days[day];
            return {name:day,value:count}
        })


=======
      let months = {} // { January: 14, February: 10 }
        employee.logins.forEach(login=>{
            const {date} = login;
            const month = moment(date).format('MMM'); // January
            if(months[month]){
                months[month]++
            } else {
                months[month] = 1
            }
        })
        const data = Object.keys(months).map(month=>{
            return {month, login: months[month]}
        })
        console.log('data',data)
>>>>>>> 56021e8aad7c8d3bb18841e8e9f39edae40fc506
        return (
             <div className="single">
                 <div onClick={this.goBack}>Go Back > </div>
                    <ul>
                        <li>
                            <div className="property">Id</div>
                            <div className="value">{employee.id}</div>
                        </li>
                        <li>
                            <div className="property">Name</div>
                            <div className="value">{employee.first_name}</div>
                        </li>
                        <li>
                            <div className="property">Lastname</div>
                            <div className="value">{employee.last_name}</div>
                        </li>
                        <li>
                            <div className="property">City</div>
                            <div className="value">{employee.city}</div>
                        </li>
                        <li>
                            <div className="property">State</div>
                            <div className="value">{employee.state}</div>
                        </li>
                        <li>
                            <div className="property">Email</div>
                            <div className="value">{employee.email}</div>
                        </li>
                    </ul>
<<<<<<< HEAD
                    <div className="chart">
                    <PieChart width={300} height={300}>
                        <Pie isAnimationActive={true} data={pieData} cx={200} cy={200} outerRadius={80} fill="#82ca9d" label/>
                        <Tooltip/>
                    </PieChart>
                    </div>
                    <div className="chart">
                    <BarChart width={400} height={200} data={arr}
=======
                    <div className="input-group">
  <div className="input-group-prepend">
    <span className="input-group-text">With textarea</span>
  </div>
  <textarea className="form-control" aria-label="With textarea"></textarea>
</div>
                    <div className="chart">
                    <BarChart width={800} height={300} data={data}
>>>>>>> 56021e8aad7c8d3bb18841e8e9f39edae40fc506
                                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="month"/>
                        <YAxis/>
                        <Tooltip/>
                        <Legend />
<<<<<<< HEAD
                        <Bar dataKey="count" fill="#8884d8" />
                    </BarChart>
                    </div>
                    
                    <div>
                        {
                            employee.logins.map(login=>{
                                return <div>{moment(login.date).format('MMM Do YY')}</div>
                            })
                        }
                    </div>
                    
=======
                        <Bar dataKey="login" fill="#82ca9d" />
                    </BarChart>
                    </div>
                    <div id="logins">
                        <h4>Login Count for {employee.first_name}: {employee.logins.length}</h4>
                     {
                         employee.logins.map(login=>{
                            return <div>{ moment(login.date).format('MMMM Do YYYY, h:mm:ss a')  }</div>
                         })
                     }
                    </div>
>>>>>>> 56021e8aad7c8d3bb18841e8e9f39edae40fc506
                </div>
        )
    }
}

export default withRouter(Single)