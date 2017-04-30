import { FieldGroup } from 'react-bootstrap'
import { React } from 'react'
import { PropTypes } from 'prop-types'


class FormList extends React.Component{
	render() {
		let info = {
			name: "",
			group: "",
			time: ""
		}

		return (
			<form>
				<FieldGroup 
				id="formControlsText"
				type="text"
				label="name"
				placeholder="请输入你的姓名"
				/>
				<FieldGroup 
				id="formControlsGroup"
				type="text"
				label="Group"
				placeholder="请输入你的组别"
				/>
				<FieldGroup 
				id="formControlsGroup"
				type="text"
				label="Group"
				placeholder="例会的时间"
				/>
			</form>
		)

	}
}