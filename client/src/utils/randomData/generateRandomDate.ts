
export function generateRandomDate() {
    
    const year = 2023;
    const month = Math.floor(Math.random() * 12) + 1; 
    const day = Math.floor(Math.random() * 28) + 1; 
  
    
    const formattedMonth = month < 10 ? `0${month}` : `${month}`;
    const formattedDay = day < 10 ? `0${day}` : `${day}`;
  
    return `${formattedDay}.${formattedMonth}.${year}`;

  }
