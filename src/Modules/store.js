import { create } from "zustand";

const tokenStore = create(set => ({
    token: 'hwQOaL12@i*DIi-_zws-DMV*vMrCu0YiI9JV*=JG7-IaRf3tot'
}));

export const useToken = () => tokenStore(state => state.token);

const scrollStore = create(set => ({
    scroll: {},
    setScroll: (key, value) => set(state => {
        const obj = state.scroll;
        obj[key] = value;
        return { scroll: obj };
    })
}));

export const useScroll = () => {
    const scroll = scrollStore(state => state.scroll);
    const setScroll = scrollStore(state => state.setScroll);

    return { scroll, setScroll };
}

const filterStore = create(set => ({
    sort: 0,
    player: 0,
    weight: 0,
    system: '전체',
    setSort: num => set({ sort: num }),
    setPlayer: num => set({ player: num }),
    setWeight: num => set({ weight: num }),
    setSystem: str => set({ system: str })
}));

export const useFilter = () => {
    const sort = filterStore(state => state.sort);
    const player = filterStore(state => state.player);
    const weight = filterStore(state => state.weight);
    const system = filterStore(state => state.system);

    return { sort, player, weight, system };
};

export const useSort = () => {
    const sort = filterStore(state => state.sort);
    const setSort = filterStore(state => state.setSort);

    return { sort, setSort };
}

export const usePlayer = () => {
    const player = filterStore(state => state.player);
    const setPlayer = filterStore(state => state.setPlayer);

    return { player, setPlayer };
}

export const useWeight = () => {
    const weight = filterStore(state => state.weight);
    const setWeight = filterStore(state => state.setWeight);

    return { weight, setWeight };
}

export const useSystem = () => {
    const system = filterStore(state => state.system);
    const setSystem = filterStore(state => state.setSystem);

    return { system, setSystem };
}

const tempStore = create(set => ({
    temp: 4,
    setTemp: (num) => set(state => ({ temp: state.temp + num}))
}));

export const useTemp = () => {
    const temp = tempStore(state => state.temp);
    const setTemp = tempStore(state => state.setTemp);
    return { temp, setTemp };
};