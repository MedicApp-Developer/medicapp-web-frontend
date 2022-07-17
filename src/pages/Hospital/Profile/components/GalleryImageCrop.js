import React, { useState, useEffect } from 'react'
import AvatarEditor from 'react-avatar-editor'
import { Range, getTrackBackground } from 'react-range';


function GalleryImageCrop({ selectedFile, croppedImageFile }) {


    const [value, setValue] = useState([1])
    const [editor, setEditor] = useState(null)

    const onClickSave = () => {
        if (editor) {
            // This returns a HTMLCanvasElement, it can be made into a data URL or a blob,
            // drawn on another canvas, or added to the DOM.
            var imageURL
            const canvas = editor.getImage().toDataURL();
            fetch(canvas)
                .then(res => res.blob())
                .then(blob => {
                    imageURL = window.URL.createObjectURL(blob)
                    const file = new File([blob], 'image.jpeg', {
                        type: blob.type,
                    });
                    croppedImageFile(file, imageURL)
                });
        }
    }

    return (
        <div class="modal fade" id="galleryImageCropp" tabindex="-1" aria-labelledby="galleryImageCroppLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-body text-center">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span class="icon-close"></span>
                        </button>
                        <div>
                            {selectedFile && (
                                <AvatarEditor
                                    ref={(edit) => {
                                        setEditor(edit)
                                    }}
                                    image={selectedFile.file}
                                    width={300}
                                    height={300}
                                    color={[255, 255, 255, 0.6]} // RGBA
                                    scale={value[0]}
                                    rotate={0}
                                />
                            )}
                        </div>

                        <div class='col-md-12 text-center mt-3 '>
                            <Range
                                step={0.1}
                                min={1}
                                max={2}
                                values={value}
                                onChange={(values) => {
                                    console.log('VALUES ', values);
                                    setValue(values)
                                }}
                                renderTrack={({ props, children }) => (
                                    <div
                                        onMouseDown={props.onMouseDown}
                                        onTouchStart={props.onTouchStart}
                                        style={{
                                            ...props.style,
                                            height: "36px",
                                            display: "flex",
                                            width: "100%"
                                        }}
                                    >
                                        <div
                                            ref={props.ref}
                                            style={{
                                                height: "5px",
                                                width: "100%",
                                                borderRadius: "4px",
                                                background: getTrackBackground({
                                                    values: value,
                                                    colors: ["#548BF4", "#ccc"],
                                                    min: 1,
                                                    max: 2
                                                }),
                                                alignSelf: "center"
                                            }}
                                        >
                                            {children}
                                        </div>
                                    </div>
                                )}
                                renderThumb={({ props, isDragged }) => (
                                    <div
                                        {...props}
                                        style={{
                                            ...props.style,
                                            height: "25px",
                                            width: "25px",
                                            borderRadius: "4px",
                                            backgroundColor: "#FFF",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            boxShadow: "0px 2px 6px #AAA"
                                        }}
                                    >
                                        <div
                                            style={{
                                                height: "12px",
                                                width: "3px",
                                                backgroundColor: isDragged ? "#548BF4" : "#CCC"
                                            }}
                                        />
                                    </div>
                                )}
                            />
                            <h5>Zoom</h5>
                            <div class='mt-5'>
                                <a href="javascript:void(0)" class="btn btn-primary px-5 mx-2">Cancel</a>
                                <a href="javascript:void(0)" class="btn btn-primary px-5 mx-2" onClick={onClickSave}>Crop</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default GalleryImageCrop
