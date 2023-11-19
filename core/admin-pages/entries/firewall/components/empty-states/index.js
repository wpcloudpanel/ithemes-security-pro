/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { createInterpolateElement } from '@wordpress/element';

/**
 * Solid dependencies
 */
import { Button, Text, TextVariant } from '@ithemes/ui';

/**
 * Internal dependencies
 */
import { useGlobalNavigationUrl } from '@ithemes/security-utils';
import { FirewallBasic, FirewallNoRules, VulnerabilitySuccess } from '@ithemes/security-style-guide';
import { HiResIcon } from '@ithemes/security-ui';
import { StyledEmptyState, StyledContent } from './styles';

export function EmptyStateBasic() {
	return (
		<StyledEmptyState>
			<StyledContent>
				<HiResIcon icon={ <FirewallBasic /> } />
				<Text
					variant={ TextVariant.DARK }
					weight={ 700 }
					text={ __( 'The ability to add custom firewall rules is coming soon!', 'it-l10n-ithemes-security-pro' ) }
				/>
				<Text
					align="center"
					variant={ TextVariant.DARK }
					text={
						createInterpolateElement(
							__( 'Stay updated on our latest improvements on the <a>SolidWP Blog</a>.', 'it-l10n-ithemes-security-pro' ),
							{
								// eslint-disable-next-line jsx-a11y/anchor-has-content
								a: <a href="https://go.solidwp.com/firewall-solidwp-blog" /> }
						)

					}
				/>
			</StyledContent>
		</StyledEmptyState>
	);
}

export function EmptyStateProHasVulnerabilities() {
	const vulnerabilitiesUrl = useGlobalNavigationUrl( 'vulnerabilities' );
	return (
		<StyledEmptyState>
			<StyledContent>
				<HiResIcon icon={ <FirewallNoRules /> } />
				<Text
					align="center"
					variant={ TextVariant.DARK }
					weight={ 700 }
					text={ __( 'Your site has vulnerable software installed, but there are no firewall rules available.', 'it-l10n-ithemes-security-pro' ) }
				/>
				<Text
					align="center"
					variant={ TextVariant.DARK }
					text={ __( 'Visit the vulnerabilities page to learn how to keep your site safe.', 'it-l10n-ithemes-security-pro' ) }
				/>
				<Button
					href={ vulnerabilitiesUrl }
					variant="primary"
					text={ __( 'View Vulnerabilities', 'it-l10n-ithemes-security-pro' ) }
				/>
			</StyledContent>
		</StyledEmptyState>
	);
}

export function EmptyStatePro() {
	return (
		<StyledEmptyState>
			<StyledContent>
				<HiResIcon icon={ <VulnerabilitySuccess /> } />
				<Text
					align="center"
					variant={ TextVariant.DARK }
					weight={ 700 }
					text={ __( 'No firewall rules are active on your site because you have no vulnerable software installed.', 'it-l10n-ithemes-security-pro' ) }
				/>
				<Text
					align="center"
					variant={ TextVariant.DARK }
					text={ __( 'Keep up the good work!', 'it-l10n-ithemes-security-pro' ) }
				/>
			</StyledContent>
		</StyledEmptyState>
	);
}
