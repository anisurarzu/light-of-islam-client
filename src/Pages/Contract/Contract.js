import React from 'react';
import Membership from '../AboutUs/Membership';
import Card from './Card';
import ContractUs from './ContractUs';
import GoogleMap from './GoogleMap';

const Contract = () => {
    return (
        <div>
         <ContractUs></ContractUs>
         <GoogleMap></GoogleMap>
         <Card></Card>
        </div>
    );
};

export default Contract;