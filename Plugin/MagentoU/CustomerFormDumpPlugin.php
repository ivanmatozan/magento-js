<?php

declare(strict_types=1);

namespace Matozan\MagentoJs\Plugin\MagentoU;

use Magento\Customer\Model\Customer\DataProviderWithDefaultAddresses;
use Psr\Log\LoggerInterface;

class CustomerFormDumpPlugin
{
    /**
     * @var LoggerInterface
     */
    protected $logger;

    /**
     * CustomerFormDumpPlugin constructor.
     * @param LoggerInterface $logger
     */
    public function __construct(LoggerInterface $logger)
    {
        $this->logger = $logger;
    }

    /**
     * Logs the data that is supplied to the customer add/edit form before it is rendered in the Admin panel.
     *
     * @see \Magento\Customer\Model\Customer\DataProviderWithDefaultAddresses::getData()
     *
     * @param DataProviderWithDefaultAddresses $subject
     * @param array $result
     * @return array
     */
    public function afterGetData(DataProviderWithDefaultAddresses $subject, array $result): array
    {
        foreach ($result as $customer) {
            $this->logger->debug('data: ', $customer);
        }
        return $result;
    }
}
