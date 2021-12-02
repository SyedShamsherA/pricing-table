import React,{Component} from "react";
import {Grid} from '@material-ui/core'
import './App.css';
import Con from './page'
import { render } from '@testing-library/react';

function Stylesheet () {
    render()
    
    return(
        <div>
            <div className="body">
                <h1>Offers and Discounts</h1>
                <h6>TERMS AND CONDITION APPLY *</h6>
                <div>
                    <Grid container spacing={5} justify="center"> 
                    <Con price="0" one='Single' two='5' seven='FREE'></Con>
                    <Con price="9" one='Unlimited' two='50' seven='PLUS'></Con>
                    <Con price="49" one='Unlimited' two='150' seven='PRO'></Con>
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default Stylesheet