declare type MoveToScrollOptions = {
    boundary: number;
};
declare function useMoveToScroll<T extends HTMLElement>(target: React.RefObject<T> | HTMLElement | string, options?: MoveToScrollOptions): void;
export default useMoveToScroll;
