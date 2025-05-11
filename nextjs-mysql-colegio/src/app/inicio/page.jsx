import FormSwitcher from "@/components/CompraFactura";

const Form2 = FormSwitcher


function compraproveedor() {
	return (
		<div style={{
			display: 'flex',
			width: '99vw',	//100% ancho pantalla
			height: '118vh',	//100% alto pantalla
			border: '2px #CCA9DD',
			padding: '20px',
			backgroundColor: '#CCA9DD',
		}}> 
			<Form2 />
		</div>
	);
}

export default compraproveedor;