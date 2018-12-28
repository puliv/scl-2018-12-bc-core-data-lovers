require('../src/data.js');


describe('championManage.sortData', () => {
  it('championManage.sortData debería ser una función', () => {
    expect(typeof window.championManage.sortData).toBe('function');
  });

  it('Debería devolver el champion "Annie" para championManage.sortData(championData, "key", "ascending")[0]', () => {
    //aquí va el assert;
  });

  it('Debería devolver el champion "Bard" para championManage.sortData(championData, "key", "ascending")[133]', () => {
    //aquí va el assert;
  });  

  it('Debería devolver el champion "Bard" para championManage.sortData(championData, "key", "descending")[0]', () => {
    //aquí va el assert;
  });

  it('Debería devolver el champion "Annie" para championManage.sortData(championData, "key", "descending")[133]', () => {
    //aquí va el assert;
  });
  
});

describe('championManage.filterData', () => {
  it('championManage.filterData debería ser una función', () => {
    expect(typeof window.championManage.filterData).toBe('function');
  });    

  it('Debería devolver a los champions "Aatrox, Ahri, Akali, Alistar, Amumu, Anivia, Annie, Ashe, Aurelion Sol, Azir" para championManage.filterData(championData, "A")', () => {
    //aquí va el assert;
  });

  it('Debería devolver a los champions "Bard, Blitzcrank, Brand, Braum" para championManage.filterData(championData, "B")', () => {
    //aquí va el assert;
  });

  it('Debería devolver a los champions "Ahri, Akali, Ekko, Evelynn, Fiora, Fizz, Irelia, Jax, Jhin, Kassadin, Katarina, Kayn, Kha\'Zix, LeBlanc, Lee Sin, Malzahar, Master Yi, Nidalee, Nocturne, Panteon, Pyke, Riven, Shaco, Talon, Teemo, Tristana, Tryndamere, Twitch, Vayne, Vi, Xerath, Xin Zhao, Yasuo, Zed" para championManage.filterData(championData, "Assassin")', () => {
    //aquí va el assert;
  });

  // test con 2 filtros
  //arreglar este test para que la función reciba un arreglo en vez de string
  it('Debería devolver a los champions "Ahri, Evelynn, Kassadin, Katarina, LeBlanc, Malzahar, Xerath" para championManage.filterData(championData, "Assassin") + championManage.filterData(championData, "Mage")', () => {
    //aquí va el assert;
  });

  // test con 3 filtros
  //arreglar este test para que la función reciba un arreglo en vez de string
  it('Debería devolver a los champions "Ahri, LeBlanc, Malzahar, Xerath" para championManage.filterData(championData, "Assassin") + championManage.filterData(championData, "Mage") + championManage.filterData(championData, "Ranged")', () => {
    //aquí va el assert;
  });
  
});

describe('championManage.computeStats', () => {
  it('championManage.computeStats debería ser una función', () => {
    expect(typeof window.championManage.filterData).toBe('function');
  }); 
  
  it('Debería devolver el promedio de cada stat de todos los champions al aplicar championManage.computeStats(championData), valor de 550.1820895522388', () => {
    //aquí va el assert;
  });

  // calculo con filtros a la data
  it('Debería devolver el promedio de cada stat de todos los champions tipo "Mage" al aplicar championManage.computeStats(championManage.filterData(championData), valor de 528.3900000000001)', () => {
    //aquí va el assert;
  });


});
