VERSION=`date +'%d_%m_%y'`

docker:
	@docker build -t mancas/aloy:cabify_$(VERSION) .
	@docker push mancas/aloy:cabify_$(VERSION)
