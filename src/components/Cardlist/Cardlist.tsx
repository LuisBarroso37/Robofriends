import React from 'react';
import Card from '../Card/Card';
import { IRobot } from '../../interfaces';

const CardList = ({ robots }: {robots: Array<IRobot>}) => {
    return (
        <div>
            {robots.map((user, i) => {
                return (
                    <Card 
                        key={robots[i].id} 
                        id={robots[i].id} 
                        name={robots[i].name} 
                        email={robots[i].email}
                    />
                );
            })}
        </div>
    );
}

export default CardList;