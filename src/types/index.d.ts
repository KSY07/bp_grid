export declare namespace PMSGrid {

    interface BaseCellOptions {
        textColor?: string; // 폰트 색상값
        color?: string; // 색상 값(Background)
        drop?: boolean; // 드롭메뉴 여부
        innerContent?: string;  // 내부 내용
    }

    interface CellOptions extends BaseCellOptions {
        isEnable?: boolean;
    }

    interface ColumnOptions extends BaseCellOptions {

    }

    interface RowOptions extends BaseCellOptions {
        title: String;
        data?: CellOptions[];
    }

    interface LayoutOptions {
        color?: string; // 색상 값
        drop?: boolean; // 드롭메뉴 여부
        innerContent: string; // 내부 내용
    }

    interface GridOptions {
       width: number; // Grid의 가로 길이
       height: number; // Grid의 세로 길이
       data?: GridData;
    }

    interface GridData {
        columns: ColumnOptions[];
        rows: RowOptions[];
    }

}