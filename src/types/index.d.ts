export declare namespace PMSGrid {

    interface GridLayout<R,C> {
        rows: R[]; // Grid의 rows집합
        columns: C[]; // Grid의 columns 집합
    }

    interface CellOptions {
        color?: string; // 색상 값
        drop?: boolean; // 드롭메뉴 여부
        innerContent: string;  // 내부 내용
    }

    interface LayoutOptions {
        color?: string; // 색상 값
        drop?: boolean; // 드롭메뉴 여부
        innerContent: string; // 내부 내용
    }

    interface GridOptions<R,C> {
       el: HTMLElement;  //Grid를 렌더랑 할 대상 Element
       width?: number; // Grid의 가로 길이
       heigth?: number; // Grid의 세로 길이
       layout: GridLayout<R,C>; // Grid의 Layout Data;
    }

}