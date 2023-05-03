export let props: Props = {
    year: new Date().getFullYear(),
};

export const setProps = (properties: Props): void => {
    props = properties
}

export interface Props {
    year?: number;
}