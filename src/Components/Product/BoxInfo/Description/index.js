import GeneralField from './GeneralField';

const Description = ({tagline, description ,attenuation_level}) => {
	return (  
		<>
			<GeneralField name='mponeboñntemb' value='Venta Distribution' />
			<GeneralField name='tagline' value={tagline} />
			<GeneralField name='description' value={description} />
			<GeneralField name='roa' value='2015 r.' />
			<GeneralField name='attenuation level' value={attenuation_level}/>
			<GeneralField name='bbñepxka b emkoctn' value='bogka' />
			<GeneralField name='motehunam xpahehnr' value='5-6 net' />
		</>
	);
}
 
export default Description;