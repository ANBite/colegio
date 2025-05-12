import FormSwitcher from "@/components/principal";

const Form1 = FormSwitcher


function compraproveedor() {
	return (
		<div style={{
			display: 'flex',
			width: '99vw',	//100% ancho pantalla
			height: '118vh',	//100% alto pantalla
			border: '2pxrgb(240, 152, 0)',
			padding: '20px',
			backgroundColor: 'rgb(185, 120, 6)',
		}}
		> 
			<Form1 />
		</div>
	);
}

export default compraproveedor;