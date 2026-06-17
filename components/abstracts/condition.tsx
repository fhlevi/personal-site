type ConditionProps = {
    If?: boolean;
    ElseIf?: boolean;
    Else?: boolean;
    children: React.ReactNode;
};

export const Condition = ({ If, ElseIf, Else, children }: ConditionProps) => {
    if (If) return children;
    if (ElseIf) return children;
    if (Else) return children;
    return null;
}