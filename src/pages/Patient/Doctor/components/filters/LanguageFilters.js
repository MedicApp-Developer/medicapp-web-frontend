import React from 'react'
import { languagesList } from '../../../../../constants/extra';

function LanguageFilters({ checkedLanguages, setCheckedLanguages }) {

    const onLanguageCheckboxChanged = (spec) => {
        if (checkedLanguages.filter(item => item === spec).length > 0) {
            setCheckedLanguages(checkedLanguages.filter(item => item !== spec))
        } else {
            setCheckedLanguages([...checkedLanguages, spec]);
        }
    }

    return (
        <div class="custom-checkbox">
            <a data-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2">
                Language <i class="fa fa-angle-down float-right"></i>
            </a>
            <div class="collapse show" id="collapseExample2">
                <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="Arabic" />
                    <label class="form-check-label" for="Arabic">Arabic</label>
                </div>
                <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="English" />
                    <label class="form-check-label" for="English">English</label>
                </div>

                {languagesList?.map(lang => (
                    <div class="form-group form-check">
                        <input type="checkbox" onChange={onLanguageCheckboxChanged.bind(this, lang)} class="form-check-input" id={lang} />
                        <label class="form-check-label" for={lang}>{lang}</label>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default LanguageFilters
