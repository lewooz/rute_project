import { FC } from "react"
import styled, { css } from "styled-components"
import toBase64 from "../../functions/file_to_base64"

const MainDiv = styled.div`
position: relative;
width: auto;
height: auto;
`
const FileSelectInput = styled.input`
opacity: 0;
position: absolute;
top: 0;
left:0;
right:0;
bottom:0;
cursor: pointer;
`

interface FilePickerProps {
    child: JSX.Element
    allowMultiple?: boolean
    maxFileSize?: number
    onFilePick?: Function
}

const FilePicker: FC<FilePickerProps> = (props) => {

    const pickFile = async (event: any) => {
        event.persist()
        for (let i = 0; i < event.target.files.length; i++) {
            if (event.target.files[i].size > (props.maxFileSize ?? 10485760)) {
                alert("Dosya çok büyük")
            } else {
                props.onFilePick(event.target.files)
                // var fileObject = {
                //     fileName: event.target.files[i].name,
                //     file: event.target.files[i],
                //     credit: "",
                // }
                // const base64Image = await toBase64(event.target.files[i])
            }
        }
    }

    return (
        <MainDiv>
            {props.child}
            <FileSelectInput
                type={"file"}
                multiple={props.allowMultiple ?? false}
                onChange={(event: any) => pickFile(event)}
                accept="image/jpeg, image/png"
            />
        </MainDiv>
    )
}

export default FilePicker