function formatViewCount(viewCount) {

    if(viewCount >= 10000000){
       return (viewCount / 10000000 ).toFixed(1) + " crore" ;
    }
    else if (viewCount >= 100000 && viewCount < 10000000) {
      return (viewCount / 100000).toFixed(1) + ' L';
    } else if (viewCount >= 1000 && viewCount < 100000) {
      return (viewCount / 1000).toFixed(1) + 'K';
    } else {
      return viewCount.toString();
    }
  }

  export default formatViewCount;