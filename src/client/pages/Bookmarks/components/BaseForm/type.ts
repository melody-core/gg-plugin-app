

export interface BaseFormProps {
    onFinish: (v: any) => Promise<void>,
    onCancel: ()=> void,
    initValues?: Record<string, any>
}