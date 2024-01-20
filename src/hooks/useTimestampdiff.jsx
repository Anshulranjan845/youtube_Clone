import React from 'react'

const useTimestampdiff = (publishedAt) => {
const videoPublicationDate = new Date(publishedAt);

const currentDate = new Date();

const timeDifference = currentDate.getTime() - videoPublicationDate.getTime();
let daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));

if(daysDifference >= 365 ){
    daysDifference = Math.floor(daysDifference / 365);
    return `${daysDifference} year ago`;
}
else if(daysDifference == 0){
   
    return `Today`;
}

else return `${daysDifference} days ago`;

}

export default useTimestampdiff
