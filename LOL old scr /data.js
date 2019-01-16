let championData = [];

window.championData = championData;

window.championManage = {
  sortData: (data, sortBy, sortOrder) => {
    let sortedChampions = data;
    sortedChampions.sort((a , b) => {
      if (sortBy === 'key' && sortOrder === 'ascending') {
        return (Number(a[sortBy]) > Number(b[sortBy]) ? 1 : -1);
      }else if (sortBy === 'key' && sortOrder === 'descending') {
        return (Number(a[sortBy]) > Number(b[sortBy]) ? -1 : 1);
      }else if (sortBy === 'name' && sortOrder === 'ascending') {
        return a[sortBy] < b[sortBy] ? -1 : 1;
      }else if (sortBy === 'name' && sortOrder === 'descending') {
        return a[sortBy] < b[sortBy] ? 1 : -1;
      }
    })
    return sortedChampions;
  },
  filterData: (data, condition) => {  //condition es un array
    const letterFilter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const typeFilter = ['Assassin', 'Fighter', 'Mage', 'Support', 'Tank', 'Marksman'];
    const rangeFilter = ['Melee', 'Ranged'];
    const secondaryStat = ['MP', 'Other'];
    let filteredData = data;
    condition.forEach( element => {
      if (letterFilter.indexOf(element) !== -1){
        filteredData= filteredData.filter(champ => {
          return champ.name[0] === element;
        });
      }else if (typeFilter.indexOf(element) !== -1) {
        filteredData = filteredData.filter(champ => {
          return champ.tags.indexOf(element) !== -1;
        });
      }else if (rangeFilter.indexOf(element) !== -1) {
        if (element === 'Ranged') {
          filteredData = filteredData.filter(champ => {
            return champ.stats.attackrange > 175;
          });
        }else if (element === 'Melee') {
          filteredData = filteredData.filter(champ => {
            return champ.stats.attackrange <= 175;
          })
        }
      }else if (secondaryStat.indexOf(element) !== -1 ) {
        filteredData = filteredData.filter( champ => {
          if (element === 'MP') {
            return champ.partype === 'MP';
          }else if (element === 'Other') {
            return champ.partype !== 'MP';
          }
        })
      }

    })
    return filteredData;
    
  },
  averageStats: (data) => {
    let championStats = [];
    data.forEach(champ => {
      Object.keys(champ.stats).forEach(key => {
        if (championStats.indexOf(key) === -1) {
          championStats.push(key);
        }
      })
    })
    let averageChampion = {};
    championStats.forEach(stat => {
      averageChampion[stat] = [];
    })
    championStats.forEach(stat => {
      data.forEach(champ => {
        averageChampion[stat].push(champ.stats[stat])
      })
    })
    championStats.forEach(stat => {
      averageChampion[stat] = averageChampion[stat].reduce((acc, current)=> acc+current)/data.length;
    })
    return averageChampion;

  },
  searchChamp: (data, searching) => {
    let foundData = data;
    foundData = foundData.filter(champ => {
      return (champ.name.toLowerCase().indexOf(searching.toLowerCase()) !== -1);
    })
    return foundData;
  }
}

