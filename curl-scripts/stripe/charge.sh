curl https://api.stripe.com/v1/charges \
 -u sk_test_4eC39HqLyjWDarjtT1zdp7dc: \
 -d amount=2000 \
 -d currency=usd \
 -d source=tok_visa \
 -d description="Charge for jenny.rosen@example.com"
