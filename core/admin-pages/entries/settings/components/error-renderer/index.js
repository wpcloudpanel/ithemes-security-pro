/**
 * External dependencies
 */
import { useLocation } from 'react-router-dom';

/**
 * WordPress dependencies
 */
import {
	Button,
	Card,
	CardFooter,
	CardBody,
	ClipboardButton,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { FlexSpacer } from '@ithemes/security-components';
import { HiResIcon } from '@ithemes/security-ui';
import { Crash as Icon } from '@ithemes/security-style-guide';
import './style.scss';

export default function ErrorRenderer( { error } ) {
	const { pathname } = useLocation();

	return (
		<Card className="itsec-error-renderer">
			<CardBody>
				<HiResIcon icon={ <Icon /> } />
			</CardBody>
			<CardFooter isShady>
				{ __( 'An unexpected error occurred.', 'it-l10n-ithemes-security-pro' ) }
				<FlexSpacer />
				<Button variant="secondary" onClick={ () => window.location.reload() }>
					{ __( 'Refresh', 'it-l10n-ithemes-security-pro' ) }
				</Button>
				<ClipboardButton
					variant="primary"
					text={ `Page: ${ pathname }\nError: ${ error.stack }` }
				>
					{ __( 'Copy Error', 'it-l10n-ithemes-security-pro' ) }
				</ClipboardButton>
			</CardFooter>
		</Card>
	);
}
