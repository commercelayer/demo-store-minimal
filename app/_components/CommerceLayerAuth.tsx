import { jwtDecode, jwtIsSalesChannel } from "@commercelayer/js-auth"
import { CommerceLayer, LineItemsContainer, OrderContainer, OrderStorage, PricesContainer } from "@commercelayer/react-components"
import { JSX } from "react"

export type CommerceLayerAuthProps = {
  children: JSX.Element
  accessToken: string
  scope: string
}

export const CommerceLayerAuth = ({
  children,
  accessToken,
  scope,
}: CommerceLayerAuthProps) => {
  const decodedToken = jwtDecode(accessToken)
  const ownerKey =
    jwtIsSalesChannel(decodedToken.payload) && decodedToken.payload.owner?.id != null
      ? decodedToken.payload.owner.id
      : "guest"

  return (
    <CommerceLayer accessToken={accessToken}>
      <OrderStorage persistKey={`order-${scope}-${ownerKey}`} clearWhenPlaced>
        <OrderContainer>
          <LineItemsContainer>
            <PricesContainer>{children}</PricesContainer>
          </LineItemsContainer>
        </OrderContainer>
      </OrderStorage>
    </CommerceLayer>
  )
}
