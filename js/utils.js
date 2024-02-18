function addIfMore(acc, v) {
    if (v > acc) {
        return acc = v
    }
    return acc
}

function fillContainer(pdata, c, i) {
    let perVue = pdata.vues * 100 / MAX_VUES;
    let perTime = pdata.time * 100 / MAX_TIME;
    if (perVue > 100) {
        console.log(i, perVue, pdata, pdata.total, MAX_VUES);
    }
    if (perTime > 100) {
        console.log(i, perTime, pdata, pdata.sec, MAX_TIME);
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
    vues.innerHTML = pdata.rawVues.replace('de', ''); //corrige '___Mde'
    time.innerHTML = pdata.rawTime;
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

    for (let i = 0; i < dataDirect.length; i++) {
        fillContainer(dataDirect[i], document.querySelector('#directs'), dataDirect.length - i);
    }

    for (var i = 0; i < dataVideo.length; i++) {
        fillContainer(dataVideo[i], document.querySelector('#videos'), dataVideo.length - i);
    }
    document.querySelector('#date').innerHTML += SCRAP_DATE;
}

function computeMaxes() {
    let fullData = dataDirect.concat(dataVideo).map(x => ({ v: x.vues, t: x.time }));
    MAX_TIME = fullData.map(d => d.t).reduce(addIfMore, 0);
    MAX_VUES = fullData.map(d => d.v).reduce(addIfMore, 0);
}