function addIfMore(acc, v) {
    if (v > acc) {
        return acc = v
    }
    return acc
}

function fillContainer(pdata, maxV, maxT, c, i) {
    let perVue = pdata.total * 100 / parsedData.map(d => d.total).reduce(addIfMore, 0);
    let perTime = pdata.sec * 100 / parsedData.map(d => d.sec).reduce(addIfMore, 0);
    if (perVue > 100) {
        console.log(i, perVue, pdata, pdata.total, maxV);
    }
    if (perTime > 100) {
        console.log(i, perTime, pdata, pdata.sec, maxT);
    }
    let vues = document.createElement('div');
    let time = document.createElement('div');
    let data = document.createElement('div');
    let nb = document.createElement('div');
    let title = document.createElement('div');
    let bloc = document.createElement('div');
    vues.className = "vues";
    time.className = 'time';
    data.className = 'data';
    nb.className = 'nb';
    title.className = 'title';
    bloc.className = 'bloc';

    vues.style.width = `${perVue}%`;
    time.style.width = `${perTime}%`;
    vues.innerHTML = pdata.vues.replace('de', ''); //corrige '___Mde'
    time.innerHTML = pdata.time;
    title.innerHTML = pdata.title;
    nb.innerHTML = i;

    data.appendChild(vues);
    data.appendChild(time);
    bloc.appendChild(nb);
    bloc.appendChild(data);
    bloc.appendChild(title);
    c.appendChild(bloc);
}

function createContainers() {

    for (let i = 0; i < parsedData.length; i++) {
        fillContainer(parsedData[i], maxVues, maxTime, document.querySelector('#container'), i)
    }

    //   for (var i = 0; i < dataVideo.length; i++) {
    // fillContainer(dataVideo[i], mVues, mTime, document.querySelector('#container2'), i)
    //   }
}
